// TIMER
// GET TIMER DIV
// INCREMENT AND POST NUMBER INTO TIMER DIV EVERY SECDOND
// ONLY INCREMENT IF STATE IS PLAY

const display = document.querySelector('#counter');
const comment_form = document.querySelector('#comment-form');
const add_btn = document.getElementById('+');
const minus_btn = document.getElementById('-');
const heart = document.getElementById('<3');
const likes = document.querySelector('.likes');

let timer;
let counter = 0;
let state = '';
let likes_arr = [];

function add_num() {
  let num = counter += 1;
  display.textContent = num.toString();
}

function minus_num() {
  let num = counter -= 1;
  display.textContent = num.toString();
}

function remove() {
  clearInterval(timer);
  let num = counter -= 1;
  display = num.toString();
  count();
}

function count() {

  timer = setInterval(function () {
    counter += 1;
    display.innerText = counter.toString();
  }, 1000);

}

function like() {
  likes_arr.push(counter);

  let li = document.createElement('li');
  let n = occurances(counter);

  li.textContent = `${counter} has been liked ${n} times`;

  likes.append(li);
}

function occurances(num) {
  let n = 0;

  for (let i = 0; i < likes_arr.length; i++) {
    if (likes_arr[i] === num) {
      n += 1;
    }
  }

  return n;
}

function disable_enable_btns() {
  let btns = document.querySelectorAll('button');

  btns.forEach(btn => {
    if (btn.id != 'pause') {
      btn.disabled = (state == 'pause' ? true : false);
    }
  });
}

document.addEventListener('DOMContentLoaded', e => {

  count();
  add_btn.addEventListener('click', add_num);
  minus_btn.addEventListener('click', minus_num);
  heart.addEventListener('click', like);

  comment_form.addEventListener('submit', ev => {

    ev.preventDefault();

    let comment_input = document.querySelector('#comment');
    let comment_list = document.querySelector('#list');
    let val = comment_input.value;
    let div = document.createElement('div');

    div.textContent = val;
    comment_list.append(div);

  });

  let pause_btn = document.querySelector('#pause');

  pause_btn.addEventListener('click', () => {
    if (state != 'pause') {
      state = 'pause';
      pause_btn.textContent = 'resume';

      clearInterval(timer);
      disable_enable_btns();

    } else if (state == 'pause') {
      state = '';
      pause_btn.textContent = 'pause';
      disable_enable_btns();

      count();
    }
  });

});


// OPERATIONS
// GET SUB AND ADD DIVS
// ADD ONLICK EVENT TO EACH
// SUB IF CLICK ON SUB AND UPDATE TIMER DIV
// ADD IF CLICK ON ADD AND UPDATE TIMER DIV

// PAUSE
// STOP TIMER
// DISABLE BUTTONS
