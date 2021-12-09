import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import TEST_DATA from "./TEST_DATA.json";
import { UsersPage } from "./Users";
import { ThemeProvider, DEFAULT_THEME } from "@zendeskgarden/react-theming";

// TODO: Add THemeProvider wrapper
describe("<UsersPage />", () => {
  beforeAll(() => {
    jest.spyOn(window, "fetch");
  });

  describe("render", () => {
    beforeEach(() => {
      window.fetch.mockResolvedValue({
        ok: true,
        json: async () =>
          new Promise((resolve) => setTimeout(() => resolve(TEST_DATA), 100)),
      });
    });

    it("should render a loading state", async () => {
      render(<UsersPage />, {
        wrapper: (props) => (
          <ThemeProvider
            {...props}
            focusVisibleRef={null}
            theme={DEFAULT_THEME}
          />
        ),
      });

      await waitFor(() => screen.getByRole("heading", { level: 2 }));

      expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent(
        "Users are loading..."
      );
    });

    it("should render two lines in the table", async () => {
      render(<UsersPage />, {
        wrapper: (props) => <ThemeProvider {...props} />,
      });

      await waitFor(() => screen.getAllByRole("row"));

      expect(screen.getAllByRole("row")).toHaveLength(3);
    });
  });
});
