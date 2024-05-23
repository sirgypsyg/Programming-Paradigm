fib :: Integer -> Integer
fib 0 = 0
fib 1 = 0
fib x = fib(x - 1) + fib(x - 2)

main = do
  print(fib 4)

fib :: Integer -> Integer
fib x
  | x <= 2 = 1
  | otherwise = fib(x-1) + fib(x-2)

main = do
  print(fib 9)