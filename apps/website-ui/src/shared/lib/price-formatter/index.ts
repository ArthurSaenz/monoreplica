const int = new Intl.NumberFormat('en-US')

export const priceFormatter = (price: number, _currencySymbol?: string) => {
  return int.format(price)
}
