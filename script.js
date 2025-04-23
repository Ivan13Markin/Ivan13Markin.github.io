document.getElementById('uploadForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const title = document.getElementById('videoTitle').value;
    const description = document.getElementById('videoDescription').value;
    const file = document.getElementById('videoFile').files[0];

    // Здесь Вы можете добавить логику для загрузки видео на сервер
    // Например, отправить данные на сервер с помощью fetch API
    console.log('Video uploaded:', title, description, file);
});

// Функция для отображения видео
function displayVideos(videos) {
    const videoContainer = document.getElementById('videos');
    videoContainer.innerHTML = '';
    videos.forEach(video => {
        const videoDiv = document.createElement('div');
        videoDiv.className = 'video';
        videoDiv.innerHTML = `
            <h3>${video.title}</h3>
            <p>${video.description}</p>
            <video src="${video.src}" controls></video>
            <button onclick="likeVideo('${video.id}')">Like</button>
            <button onclick="dislikeVideo('${video.id}')">Dislike</button>
            <div id="comments-${video.id}"></div>
            <input type="text" placeholder="Leave a comment" id="commentInput-${video.id}">
            <button onclick="addComment('${video.id}')">Comment</button>
        `;
        videoContainer.appendChild(videoDiv);
    });
}

// Пример функции для лайков
function likeVideo(videoId) {
    console.log('Liked video:', videoId);
}

// Пример функции для комментариев
function addComment(videoId) {
    const commentInput = document.getElementById(`commentInput-${videoId}`);
    console.log('Comment on video:', videoId, commentInput.value);
}