import React from "react";
import {
  Body,
  Chrome,
  Content,
  Header,
  Main,
  Nav,
  NavItem,
  NavItemIcon,
  NavItemText,
  SkipNav,
} from "@zendeskgarden/react-chrome";
import { PALETTE } from "@zendeskgarden/react-theming";
import { ReactComponent as ProductIcon } from "@zendeskgarden/svg-icons/src/26/garden.svg";

import { routes } from "../pages/routes";
import { Match, useNavigate } from "@reach/router";

export const ChromeLayout = ({ children }) => {
  const navigate = useNavigate();

  return (
    <Chrome isFluid hue={PALETTE.blue[800]}>
      <SkipNav targetId="example-navigation-main-content">
        Skip to main content
      </SkipNav>
      <Nav isExpanded>
        <NavItem hasLogo>
          <NavItemIcon>
            <ProductIcon style={{ color: PALETTE.green[400] }} />
          </NavItemIcon>
          <NavItemText>Zendesk Garden</NavItemText>
        </NavItem>
        {routes.map(({ name, path, Icon }) => (
          <Match path={path}>
            {({ match }) => (
              <NavItem isCurrent={match} onClick={() => navigate(path)}>
                <NavItemIcon>
                  <Icon />
                </NavItemIcon>
                <NavItemText>{name}</NavItemText>
              </NavItem>
            )}
          </Match>
        ))}
      </Nav>
      <Body>
        <Header />
        <Content id="example-navigation-main-content">
          <Main style={{ padding: 28 }}>{children}</Main>
        </Content>
      </Body>
    </Chrome>
  );
};
