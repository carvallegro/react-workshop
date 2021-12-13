import React from "react";

import { PALETTE } from "@zendeskgarden/react-theming";
import { Avatar } from "@zendeskgarden/react-avatars";
import { ReactComponent as UserIcon } from "@zendeskgarden/svg-icons/src/16/user-solo-stroke.svg";
import { Row, Col } from "@zendeskgarden/react-grid";
import { Timeline } from "@zendeskgarden/react-accordions";
import { Span } from "@zendeskgarden/react-typography";
import {Anchor} from "@zendeskgarden/react-buttons";

import {useFetchUsers} from "../features/users/hooks";

// 1. Create a custom hook ✅
// 2. Link to the User page from the Users page

export const UserPage = ({userId}) => {
  const {users, isLoading, error} = useFetchUsers({id: userId})

  if(!userId || (!isLoading && !users) || (!isLoading && !users[0])) {
    return <div>
      No users found
    </div>
  }

  if(!isLoading && error){
    return <div>Error: {error.toString()}</div>
  }

  if (isLoading) {
    return <div>Fetching user...</div>
  }

  const {id, username, name, website, company} = users[0]

  return (
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
                    <UserIcon role="img" aria-label="icon avatar"/>
                  </Avatar>
                </Timeline.Content>
              </Timeline.Item>

              <Timeline.Item>
                <Timeline.OppositeContent>
                  <Span hue="grey">ID</Span>
                </Timeline.OppositeContent>
                <Timeline.Content>
                  <Span isBold>{id}</Span>
                </Timeline.Content>
              </Timeline.Item>

              <Timeline.Item>
                <Timeline.OppositeContent>
                  <Span hue="grey">Name</Span>
                </Timeline.OppositeContent>
                <Timeline.Content>
                  <Span isBold>{name}</Span>
                </Timeline.Content>
              </Timeline.Item>

              <Timeline.Item>
                <Timeline.OppositeContent>
                  <Span hue="grey">Username</Span>
                </Timeline.OppositeContent>
                <Timeline.Content>
                  <Span isBold>{username}</Span>
                </Timeline.Content>
              </Timeline.Item>

              <Timeline.Item>
                <Timeline.OppositeContent>
                  <Span hue="grey">Website</Span>
                </Timeline.OppositeContent>
                <Timeline.Content>
                  <Anchor href={`www.${website}`}>{website}</Anchor>
                </Timeline.Content>
              </Timeline.Item>

              <Timeline.Item>
                <Timeline.OppositeContent>
                  <Span hue="grey">Catch Phrase</Span>
                </Timeline.OppositeContent>
                <Timeline.Content>
                  <Span isBold>{company.catchPhrase}</Span>
                </Timeline.Content>
              </Timeline.Item>
            </Timeline>
          </Col>
        </Row>
      </>
  );
};
