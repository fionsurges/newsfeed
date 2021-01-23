import React from 'react';
// import {
// 	ButtonGroup,
// 	Footer,
// 	Header,
// 	HeaderBlock,
// 	TemplatePillowPage,
// } from '@autopay/components/2.0/components';
// import { Routes } from '@autopay/checklight-ui/src/routes';
// import { Account } from '../../hooks';

// TODO: temp pres model
// const presModel = (history) => ({
// 	template: {
// 		buttons: {
// 			primaryButton: {
// 				children: 'Get started',
// 				onClick: () => history.push(Routes.SIGN_UP),
// 			},
// 			secondaryButton: {
// 				children: 'Sign in',
// 				onClick: () => history.push(Routes.SIGN_IN),
// 			},
// 		},
// 		header: {
// 			showBack: false,
// 			showClose: true,
// 		},
// 		footer: {
// 			isActive: false,
// 		},
// 		img: <img style={{ width: '100%' }} src="https://checklight.com/img/hero-img.jpg" alt="hero" />,
// 	},
// 	headerBlock: {
// 		title: 'Let\'s get started by creating your Checklight account.',
// 		subtitle: 'Sign up',
// 		paragraph: '',
// 	},
// });

export const Home = () => {
	// const [accountState] = Account();
	// const loggedIn = !!accountState.loggedIn;
	// const {
	// 	headerBlock,
	// 	template: {
	// 		header,
	// 		footer,
	// 		img,
	// 		buttons,
	// 	},
	// } = presModel(history);

	// // TODO: redirect to dashboard
	// if (loggedIn) {
	// 	return null;
	// }

	// const ButtonFooter = () =>
	// 	<Footer {...footer}>
	// 		<ButtonGroup {...buttons} />
	// 	</Footer>;

	return (
        <div>
            <h1>Main page</h1>
        </div>
    );
};
