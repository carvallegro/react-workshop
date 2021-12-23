import {renderHook} from "@testing-library/react-hooks";
import {useFetchUsers} from "./hooks";
import TEST_DATA from "../../pages/TEST_DATA.json";

describe('useFetchUsers', () => {
    beforeAll(() => {
        jest.spyOn(window, "fetch");
    });

    beforeEach(() => {
        window.fetch.mockResolvedValue({
            ok: true,
            json: async () =>
                new Promise((resolve) => setTimeout(() => resolve(TEST_DATA), 100)),
        });
    })

    describe('without filters', () => {
        it('should return an array of users', async () => {
            const {result, waitForNextUpdate} = renderHook(() => useFetchUsers())

            expect(result.current.isLoading).toBeTruthy()
            await waitForNextUpdate()

            expect(result.current.isLoading).toBeFalsy()
            expect(result.current.users).toHaveLength(2)
            expect(window.fetch).toHaveBeenCalledWith( `https://jsonplaceholder.typicode.com/users`)
        })
    })

    describe('with filters', () => {
        it('should return an array of users', async () => {
            const {result, waitForNextUpdate} = renderHook(() => useFetchUsers({id: 123}))

            expect(result.current.isLoading).toBeTruthy()
            await waitForNextUpdate()

            expect(result.current.isLoading).toBeFalsy()
            expect(window.fetch).toHaveBeenCalledWith( `https://jsonplaceholder.typicode.com/users?id=123`)
        })
    })
})
