import React from 'react';
import { styled } from 'styletron-react';
import theme from '@autopay/client/assets/styles/theme';

const defaultOptions = {
	desktopPadding: theme.unit[5],
	mobilePadding: theme.unit[2],
};

const StyledComponent = styled(
	'div',
	({ $noPadding, $negativeMargin, $isDesktop, $options }) => {
		const options = { ...defaultOptions, ...$options };

		return {
			...theme.containers.default,
			...$noPadding ? { paddingLeft: 0, paddingRight: 0 } : {},
			...$negativeMargin ? {
				marginLeft: `-${$isDesktop ? options.desktopPadding : options.mobilePadding}`,
				marginRight: `-${$isDesktop ? options.desktopPadding : options.mobilePadding}`,
			} : {},
		};
	}
);

export default ({ isDesktop, isMobile, ...props }) => <StyledComponent $isDesktop={isDesktop} {...props} />;

