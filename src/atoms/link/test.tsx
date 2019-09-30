import * as React from "react"
import { shallow } from "enzyme"

import { Link } from "./"

describe("Link", () => {
  it("should render correctly", () => {
    shallow(<Link href="/mockUrl" />)
  })

  it("should handle the click event", () => {
    window.alert = jest.fn()
    const component = shallow(<Link href="/testurl">Testlink</Link>)
    component.simulate("click")
    expect(window.alert).toHaveBeenCalledWith("clicked!")
  })
})
