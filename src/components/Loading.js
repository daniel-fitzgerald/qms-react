import React from 'react'

import Content from 'components/Content'

let Loading = ({ messages, children }) => <Content messages={messages}>{children}</Content>

export default Loading