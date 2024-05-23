document.addEventListener('DOMContentLoaded', function() {
    var backgroundAudio = document.getElementById('background-music');
    
    function playBackgroundAudio() {
        if (backgroundAudio.paused) {
            backgroundAudio.play().catch(function(error) {
                console.error('Erro ao reproduzir áudio:', error);
            });
            document.removeEventListener('click', playBackgroundAudio);
        }
    }
    
    // Adiciona um ouvinte de evento para reproduzir o áudio quando o documento for clicado
    document.addEventListener('click', playBackgroundAudio);
});
