import React from 'react'
import classNames from 'classnames'

import makeStyles from '@material-ui/core/styles/makeStyles'
import { default as MaterialBox, BoxProps as MaterialBoxProps } from '@material-ui/core/Box'

const useStyles = makeStyles(theme => ({
  gap: {
    gap: (props: BoxProps) => props.gap && theme.spacing(props.gap),
  },
}))

interface BoxProps extends MaterialBoxProps {
  gap?: number
}

function Box(props: BoxProps) {
  const classes = useStyles(props)

  const boxClass = classNames({
    [classes.gap]: props.gap,
  })

  return (
    <MaterialBox className={boxClass} {...props}>
      {props.children}
    </MaterialBox>
  )
}

export default Box
