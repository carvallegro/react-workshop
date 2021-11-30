import React from "react";

import { PALETTE } from "@zendeskgarden/react-theming";
import { Avatar } from "@zendeskgarden/react-avatars";
import { ReactComponent as UserIcon } from "@zendeskgarden/svg-icons/src/16/user-solo-stroke.svg";
import { Row, Col } from "@zendeskgarden/react-grid";
import { Timeline } from "@zendeskgarden/react-accordions";
import { Span } from "@zendeskgarden/react-typography";

// 1. Create a custom hook
// 2. Link to the User page from the Users page

export const UserPage = () => (
  <>
    <Row justifyContent="center">
      <Col sm="auto">
        <Timeline>
          <Timeline.Item>
            <Timeline.OppositeContent>
              <Span hue="grey">Profile</Span>
            </Timeline.OppositeContent>
            <Timeline.Content>
              <Avatar backgroundColor={PALETTE.grey[600]}>
                <UserIcon role="img" aria-label="icon avatar" />
              </Avatar>
            </Timeline.Content>
          </Timeline.Item>

          <Timeline.Item>
            <Timeline.OppositeContent>
              <Span hue="grey">ID</Span>
            </Timeline.OppositeContent>
            <Timeline.Content>
              <Span isBold>???</Span>
            </Timeline.Content>
          </Timeline.Item>

          <Timeline.Item>
            <Timeline.OppositeContent>
              <Span hue="grey">Name</Span>
            </Timeline.OppositeContent>
            <Timeline.Content>
              <Span isBold>???</Span>
            </Timeline.Content>
          </Timeline.Item>

          <Timeline.Item>
            <Timeline.OppositeContent>
              <Span hue="grey">Username</Span>
            </Timeline.OppositeContent>
            <Timeline.Content>
              <Span isBold>???</Span>
            </Timeline.Content>
          </Timeline.Item>

          <Timeline.Item>
            <Timeline.OppositeContent>
              <Span hue="grey">Website</Span>
            </Timeline.OppositeContent>
            <Timeline.Content>
              <Span isBold>???</Span>
            </Timeline.Content>
          </Timeline.Item>

          <Timeline.Item>
            <Timeline.OppositeContent>
              <Span hue="grey">Catch Phrase </Span>
            </Timeline.OppositeContent>
            <Timeline.Content>
              <Span isBold>"Multi-layered client-server neural-net"</Span>
            </Timeline.Content>
          </Timeline.Item>
        </Timeline>
      </Col>
    </Row>
  </>
);
