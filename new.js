var fizzBuzz = (num) => {
    for(var i = 1; i <= num; i++)
    {
        // if((i % 5 == 0) && (i % 3 == 0))
        // {
        //     console.log('FizzBuzz');
        // }
         if((i % 2 == 0))
        {
            console.log('Fizz');
        }
        // else if((i % 5 == 0))
        // {
        //     console.log('Buzz');
        // }
        else
        {
            // console.log(i);
        }
    }
}

fizzBuzz(10);