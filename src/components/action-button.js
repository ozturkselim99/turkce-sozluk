import React from 'react'

import Button from './button'
import Text from './text'
import theme from "../utils/theme";

function ActionButton({ children, ...props }) {
    return (
        <Button
            style={{
                shadowColor: '#000',
                shadowOpacity: 0.16,
                shadowRadius: 4,
                shadowOffset: {
                    width: 0,
                    height: 2
                }
            }}
            minWidth={theme.size.actionButton}
            height={theme.size.actionButton}
            borderRadius={theme.radii.full}
            bg="white"
            px={8}
            {...props}
        >
            {children}
        </Button>
    )
}

export function ActionButtonTitle({ children, ...props }) {
    return (
        <Text color={theme.colors.textLight} fontWeight="bold" ml={8} mr={8} {...props}>
            {children}
        </Text>
    )
}

export default ActionButton
