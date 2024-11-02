document.getElementById('randomItem').addEventListener('click', () => {
    fetch('data.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('네트워크 응답이 좋지 않습니다.');
            }
            return response.json();
        })
        .then(data => {
            // 랜덤한 인덱스 생성
            const randomIndex = Math.floor(Math.random() * data.length);
            const randomData = data[randomIndex];
            
            // 값만 추출하여 화면에 출력
            const dataDiv = document.getElementById('data');
            dataDiv.innerHTML = Object.values(randomData).join(', '); // 값만 출력
        })
        .catch(error => {
            console.error('데이터를 가져오는 중 오류 발생:', error);
        });
});