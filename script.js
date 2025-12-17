let questionsLeft = 3;
let currentStep = 0;

function handleQuestion() {
    const input = document.getElementById('userInput').value.toLowerCase();
    const dialogue = document.getElementById('dialogueContent');
    
    if (currentStep === 0) {
        if (!['规则', '字母', '提示'].includes(input)) {
            dialogue.textContent = '凯撒：请提出有效问题！';
            return;
        }

        switch(input) {
            case '规则':
                dialogue.innerHTML = '凯撒：听好了！<br>J 是Julius的首字母，享有特权编码为 0<br>其他字母使用罗马逆序法：编码值 = 27 - 字母位置';
                break;
            case '字母':
                dialogue.innerHTML = '凯撒：数字解码为字母：<br>0 → J（特殊规则）<br>6 → 21 → U<br>15 → 12 → L<br>18 → 9 → I<br>6 → 21 → U';
                break;
            case '提示':
                dialogue.innerHTML = '凯撒：我的名字在罗马广为人知<br>它有六个字母，最后一个是S<br>想想S的位置值！';
                break;
        }

        questionsLeft--;
        document.getElementById('counter').textContent = `剩余提问次数：${questionsLeft}`;
        
        if (questionsLeft === 0) {
            currentStep = 1;
            dialogue.innerHTML += '<br><br>凯撒：现在，说出最后一个数字！';
            document.getElementById('userInput').placeholder = '输入被遮蔽的数字';
            document.querySelector('button').onclick = handleAnswer;
        }
    }
}

function handleAnswer() {
    const answer = document.getElementById('userInput').value;
    const dialogue = document.getElementById('dialogueContent');
    
    if (answer === '8') {
        dialogue.innerHTML = '凯撒：正确！S的编码=27-19=8<br>完整序列：0,6,15,18,6,8';
    } else {
        dialogue.textContent = '凯撒：太遗憾了！你将永远留在罗马。';
        setTimeout(() => {
            window.close();
        }, 3000);
    }
}