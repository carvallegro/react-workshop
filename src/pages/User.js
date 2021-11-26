import React from "react";
import { PALETTE } from "@zendeskgarden/react-theming";
import { Avatar } from "@zendeskgarden/react-avatars";
import { Row, Col } from "@zendeskgarden/react-grid";
import { ReactComponent as UserIcon } from "@zendeskgarden/svg-icons/src/16/user-solo-stroke.svg";

export const UserPage = () => (
  <Row>
    <Col textAlign="center">
      <Avatar backgroundColor={PALETTE.grey[600]}>
        <Avatar.Text>ZD</Avatar.Text>
      </Avatar>
    </Col>
  </Row>
);
