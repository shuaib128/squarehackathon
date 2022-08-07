import {render, screen} from "@testing-library/react"
import BillBord from "../../HomeComponents/BillBord"

test('should first test', () => {
    render(<BillBord />)

    expect(screen.getByText("Square Unboxed Hackathon"))
})