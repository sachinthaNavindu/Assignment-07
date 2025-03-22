const boxes = document.querySelectorAll('.box');
        let index = 0;
        let direction = 1;
        let intervalId = null;

        function effect() {
            
            boxes.forEach(box => box.style.backgroundColor = 'white');

            if (index >= 0 && index < boxes.length) {
                boxes[index].style.backgroundColor = 'rgb(255, 0, 0)'; 
            }

         
            if (index - direction >= 0 && index - direction < boxes.length) {
                boxes[index - direction].style.backgroundColor = 'rgb(255, 80, 80)'; 
            }
            if (index - 2 * direction >= 0 && index - 2 * direction < boxes.length) {
                boxes[index - 2 * direction].style.backgroundColor = 'rgb(255, 140, 140)'; 
            }
            if (index - 3 * direction >= 0 && index - 3 * direction < boxes.length) {
                boxes[index - 3 * direction].style.backgroundColor = 'rgb(255, 200, 200)'; 
            }

            
            index += direction;

         
            if (index === boxes.length || index === -1) {
                direction *= -1;
                index += direction; 
            }
        }

        function startClick() {
            if (!intervalId) {
                intervalId = setInterval(effect, 200);
            }
        }

        function clickPause() {
            clearInterval(intervalId);
            intervalId = null;
        }
        window.onload = function () {
            startClick();
        };
        // setInterval(effect, 200);