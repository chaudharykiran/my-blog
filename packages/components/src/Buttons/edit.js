import React from 'react'

import Button from '@material-ui/core/Button'
import Tooltip from '@material-ui/core/Tooltip'
import Icon from '@material-ui/core/Icon'

export default ({onClick, ...rest}) => (
	<Tooltip title='Edit' display='inline-flex'>
		<Button
			{...rest}
			aria-label='Edit title'
			disableRipple
			onClick={onClick}
		>
			<Icon>edit_icon</Icon>
		</Button>
	</Tooltip>
)
