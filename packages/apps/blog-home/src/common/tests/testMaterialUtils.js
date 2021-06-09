import React from 'react'

import {
	createMount,
	createShallow
} from '@material-ui/core/test-utils';

import {getRootComponent} from './testWrapper';

// ready for use
export const getSetup = (Component) => () => getSetupRaw(Component)

// when we need to have all the theme and store wrappings etc:
export const getSetupRaw = (Component, {wrapperProps = {}, componentProps = {}} = {}) => {
	const RootComponent = getRootComponent(Component, componentProps, wrapperProps)

	const render = createMount()
	const component = render(<RootComponent />)

	const getInstanceBase = (component) => {
		return component.find(Component).instance()
	}

	const getInstance = (component) => {
		return getInstanceBase(component).wrappedInstance
	}

	return {
		cleanup: render.cleanUp,
		RootComponent,
		component,
		getInstance,
		getInstanceBase, // <- use this one if you wanna test state
		getState: (component) => getInstanceBase(component).state,
		getShallow: () => createShallow()(<RootComponent />),
	}
}

// RAW non wrapped component:
export const mount = (Component, props = {}) => createMount()(<Component {...props} />)
