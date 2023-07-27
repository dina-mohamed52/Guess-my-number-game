'use strict';
let secretNumber = Math.trunc( Math.random() * 20 ) + 1;
let highscore = 0;
let score = 20;
document.querySelector( '.number' ).textContent ='?';

document.querySelector('.check').addEventListener('click', function ()
{
    const guess = Number(document.querySelector( '.guess' ).value);
    
   
    if ( !guess )
    {
        document.querySelector( '.message' ).textContent =
            'please enter the number you guess ';
    }
    else if ( guess === secretNumber )
    {
    
        document.querySelector( '.message' ).textContent = 'correct Number🎇✨🎉🎊';
        document.querySelector( 'body' ).style.backgroundColor = '#60b347';
        document.querySelector( '.number' ).textContent = secretNumber;

        if ( score > highscore )
        {
            highscore = score;
            document.querySelector('.highscore').textContent=score;
        }

    }
    else if ( guess !== secretNumber )
    {
        if ( score > 1 )
        {
            document.querySelector( '.message' ).textContent =
            guess > secretNumber ? 'too high 📈' : 'too low 📉';
            score--;
            document.querySelector( '.score' ).textContent = score;
       
        }
        else
        {
            document.querySelector( '.message' ).textContent =
                'you loss the game 😥☹😭'
            document.querySelector( '.score' ).textContent = 0;
        }
    }
} )
document.querySelector( '.again' ).addEventListener( 'click', function ()
{
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
   
    document.querySelector( '.score' ).textContent = score;
    // document.querySelector( '.highscore' ).textContent = highscore;
     document.querySelector('.guess').value = ' ';
    document.querySelector( '.number' ).textContent = '?';
    document.querySelector( '.message' ).textContent = 'start gussing';
     document.querySelector('body').style.backgroundColor = '#222 ';

})

