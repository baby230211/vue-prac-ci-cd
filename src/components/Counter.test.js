import { render, fireEvent } from "@testing-library/vue";
import Counter from "./Counter.vue";

test("Original title is 當前點擊次數0", () => {
  const { getByTestId } = render(Counter);
  const title = getByTestId("currentCounter");
  expect(title.innerHTML).toBe("當前點擊次數0");
});

test("After a increment click the title is 當前點擊次數1", async () => {
  const { getByTestId, getByText } = render(Counter);
  const incrementButton = getByText("點擊加1");
  await fireEvent.click(incrementButton);
  const title = getByTestId("currentCounter");
  expect(title.innerHTML).toBe("當前點擊次數1");
});

test("After a decrement click the title is 當前點擊次數-1", async () => {
  const { getByTestId, getByText } = render(Counter);
  const decrementButton = getByText("點擊減1");
  await fireEvent.click(decrementButton);
  const title = getByTestId("currentCounter");
  expect(title.innerHTML).toBe("當前點擊次數-1");
});
