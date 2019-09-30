import { storiesOf } from "@storybook/react"
import React from "react"

import { Link } from "./"

storiesOf("Link", module)
  .add("With text", () => <Link href="/">Link</Link>)
  .add("With emoji", () => <Link href="/">Link with 💯</Link>)
