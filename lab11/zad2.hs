solve :: Float -> Float -> Float -> (Float, Float)
solve a b c = 
  if delta >= 0
    then ((-b - sqrt delta) / 2 * a, (-b + sqrt delta) / 2 * a)
    else error "brak rozwiazan rzeczywistych"
  where
    delta = b ^ 2 - 4 * a * c
    
    
main = do
  print (solve 1 2 3)

solve :: Float -> Float -> Float -> (Float, Float)
solve a b c
  | delta >= 0 = ((-b - sqrt delta) / 2 * a, (-b + sqrt delta) / 2 * a)
  | otherwise = error "brak rozwiazan rzeczywistych"
  where 
    delta = b ^ 2 - 4 * a * c
    
main = do
  print (solve 1 2 3)