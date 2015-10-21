1.upto(100) do |num| 
	if (num % 5 == 0) && (num % 3 == 0)
		print "FizzBuzz"
	elsif num % 3 == 0
		print "Fizz"
	elsif num % 5 == 0
		print "Buzz"
	else
		print num
		end
end
