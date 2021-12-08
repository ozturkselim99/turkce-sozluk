import React from 'react'

import Box from './box'
import theme from "../utils/theme";
export default function LoaderText({ ...props }) {
    return <Box bg={theme.colors.light} width={120} height={16} {...props} />
}
