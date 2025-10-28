 
 document.addEventListener('DOMContentLoaded', () => {

            const dropdown = document.getElementById('currency-selector');
            const selectedButton = document.getElementById('selected-currency-btn');
            const selectedFlag = document.getElementById('selected-flag');
            const selectedCode = document.getElementById('selected-code');
            const optionsList = dropdown.querySelector('.options-list');
            const currencyOptions = optionsList.querySelectorAll('.currency-option');

            //Função para abrir/fechar o dropdown
            selectedButton.addEventListener('click', () => {
                dropdown.classList.toggle('is-open');
            });

            //Lógica para trocar a moeda e a bandeira
            currencyOptions.forEach(option => {
                option.addEventListener('click', () => {
                    // Pega os dados armazenados no <li>
                    const newCode = option.getAttribute('data-code');
                    const newFlagUrl = option.getAttribute('data-flag');
                    
                   
                    selectedFlag.src = newFlagUrl;
                    selectedFlag.alt = `Bandeira de ${newCode}`;
                    
               
                    selectedCode.textContent = newCode;
                    
                   
                    dropdown.classList.remove('is-open');

                
                    currencyOptions.forEach(opt => opt.classList.remove('selected'));
                    option.classList.add('selected');
                });
            });

   
            document.addEventListener('click', (event) => {
                if (!dropdown.contains(event.target)) {
                    dropdown.classList.remove('is-open');
                }
            });

            const initialCode = selectedCode.textContent;
            optionsList.querySelector(`.currency-option[data-code="${initialCode}"]`).classList.add('selected');
        });
