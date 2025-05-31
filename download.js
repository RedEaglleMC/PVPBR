function mostrarLink(versao) {
    const javaLink = document.getElementById('java-link');
    const bedrockLink = document.getElementById('bedrock-link');

    if (versao === 'java') {
        javaLink.style.display = 'block';
        bedrockLink.style.display = 'none';
    } else if (versao === 'bedrock') {
        bedrockLink.style.display = 'block';
        javaLink.style.display = 'none';
    }
}