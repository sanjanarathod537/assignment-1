// Initialize stack and queue arrays
const stack = [];
const queue = [];

// Stack operations
const pushBtn = document.getElementById('push-btn');
const popBtn = document.getElementById('pop-btn');
const stackContainer = document.querySelector('.stack-container');

pushBtn.addEventListener('click', () => {
  const inputValue = parseInt(document.getElementById('stack-input').value);
  stack.push(inputValue);
  updateStackDisplay();
});

popBtn.addEventListener('click', () => {
  if (stack.length > 0) {
    stack.pop();
    updateStackDisplay();
  }
});

// Queue operations
const enqueueBtn = document.getElementById('enqueue-btn');
const dequeueBtn = document.getElementById('dequeue-btn');
const queueContainer = document.querySelector('.queue-container');

enqueueBtn.addEventListener('click', () => {
  const inputValue = parseInt(document.getElementById('queue-input').value);
  queue.push(inputValue);
  updateQueueDisplay();
});

dequeueBtn.addEventListener('click', () => {
    if (queue.length > 0) {
      queue.shift();
      updateQueueDisplay();
    }
  });
  
  // Update stack display
  function updateStackDisplay() {
    stackContainer.innerHTML = '';
    stack.forEach((element) => {
      const elementDiv = document.createElement('div');
      elementDiv.classList.add('stack-element');
      elementDiv.textContent = element;
      stackContainer.prepend(elementDiv); // Changed appendChild to prepend
    });
  }
  
  // Update queue display
  function updateQueueDisplay() {
    queueContainer.innerHTML = '';
    queue.forEach((element) => {
      const elementDiv = document.createElement('div');
      elementDiv.classList.add('queue-element');
      elementDiv.textContent = element;
      queueContainer.prepend(elementDiv); // Changed appendChild to prepend
    });
  }