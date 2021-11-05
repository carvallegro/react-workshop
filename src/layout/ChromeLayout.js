import React, {useState} from 'react'
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
    SkipNav
} from '@zendeskgarden/react-chrome';
import { PALETTE } from '@zendeskgarden/react-theming';
import { ReactComponent as ProductIcon } from '@zendeskgarden/svg-icons/src/26/garden.svg';
import { ReactComponent as HomeIcon } from '@zendeskgarden/svg-icons/src/26/home-fill.svg';
import { ReactComponent as EmailIcon } from '@zendeskgarden/svg-icons/src/26/email-fill.svg';
import { ReactComponent as SettingsIcon } from '@zendeskgarden/svg-icons/src/26/settings-fill.svg';
import { ReactComponent as ZendeskIcon } from '@zendeskgarden/svg-icons/src/26/zendesk.svg';

export const ChromeLayout = ({children}) => {
    const [nav, setNav] = useState('nav-1');

    return (
        <Chrome isFluid hue={PALETTE.blue[800]}>
            <SkipNav targetId="example-navigation-main-content">Skip to main content</SkipNav>
            <Nav isExpanded>
                <NavItem hasLogo>
                    <NavItemIcon>
                        <ProductIcon style={{color: PALETTE.green[400]}}/>
                    </NavItemIcon>
                    <NavItemText>Zendesk Garden</NavItemText>
                </NavItem>
                <NavItem isCurrent={nav === 'nav-1'} onClick={() => setNav('nav-1')}>
                    <NavItemIcon>
                        <HomeIcon/>
                    </NavItemIcon>
                    <NavItemText>Home</NavItemText>
                </NavItem>
                <NavItem isCurrent={nav === 'nav-2'} onClick={() => setNav('nav-2')}>
                    <NavItemIcon>
                        <EmailIcon/>
                    </NavItemIcon>
                    <NavItemText>Email</NavItemText>
                </NavItem>
                <NavItem isCurrent={nav === 'nav-3'} onClick={() => setNav('nav-3')}>
                    <NavItemIcon>
                        <SettingsIcon/>
                    </NavItemIcon>
                    <NavItemText>Settings</NavItemText>
                </NavItem>
                <NavItem hasBrandmark title="Zendesk">
                    <NavItemIcon>
                        <ZendeskIcon/>
                    </NavItemIcon>
                    <NavItemText>Zendesk</NavItemText>
                </NavItem>
            </Nav>
            <Body>
                <Header/>
                <Content id="example-navigation-main-content">
                    <Main style={{padding: 28}}>
                        {children}
                    </Main>
                </Content>
            </Body>
        </Chrome>
    );
}
