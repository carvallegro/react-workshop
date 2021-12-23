import React from "react";
import { Dropdown, Trigger, Menu, Item } from "@zendeskgarden/react-dropdowns";
import {
  Body,
  Cell,
  Head,
  HeaderCell,
  HeaderRow,
  OverflowButton,
  Row,
  Table,
} from "@zendeskgarden/react-tables";

const OverflowMenu = () => (
  <Dropdown>
    <Trigger>
      <OverflowButton aria-label="Row actions" />
    </Trigger>
    <Menu
      placement="bottom-end"
      popperModifiers={{
        preventOverflow: {
          boundariesElement: "viewport",
        },
        flip: {
          enabled: false,
        },
        offset: {
          fn: (data) => {
            /**
             * Ensure correct placement relative to trigger
             **/
            data.offsets.popper.top -= 2;

            return data;
          },
        },
      }}
    >
      <Item value="item-1" disabled>
        Profile
      </Item>
    </Menu>
  </Dropdown>
);

/**
 * TODO:
 * 1. map the users props to the Garden table
 * 2. (Optional) Add an empty state.
 *
 * @param users
 * @return {JSX.Element}
 * @constructor
 */
export const UserTable = ({ users = [] }) => (
  <div style={{ overflowX: "auto" }}>
    <Table style={{ minWidth: 500 }}>
      <Head>
        <HeaderRow>
          <HeaderCell>Id</HeaderCell>
          <HeaderCell>Name (username)</HeaderCell>
          <HeaderCell>email</HeaderCell>
          <HeaderCell>website</HeaderCell>
          <HeaderCell hasOverflow>
            <OverflowMenu />
          </HeaderCell>
        </HeaderRow>
      </Head>
      <Body>
        {users.map(({ id, name, username, email, website }) => (
          <Row>
            <Cell>{id}</Cell>
            <Cell>
              {name} ({username})
            </Cell>
            <Cell>{email}</Cell>
            <Cell>{website}</Cell>
            <Cell hasOverflow>
              <OverflowMenu />
            </Cell>
          </Row>
        ))}
      </Body>
    </Table>
  </div>
);
