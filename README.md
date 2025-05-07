# AC2-CIBER
*Teoria de Criptografia*
Criptografia simétrica: Utiliza a mesma chave para criptografar e descriptografar os dados, o que torna o processo rápido e eficiente. Porém, seu principal desafio é o compartilhamento seguro da chave secreta entre as partes envolvidas na comunicação. Se essa chave for interceptada, toda a segurança da comunicação é comprometida. Um exemplo prático de criptografia simétrica é a proteção de arquivos em um computador com o uso de algoritmos como o AES. Também é comumente usada em redes privadas virtuais (VPNs), onde a chave é compartilhada entre o cliente e o servidor para garantir a segurança da comunicação.

Criptografia assimétrica: Utiliza um par de chaves: uma chave pública, que pode ser compartilhada livremente, e uma chave privada, que é mantida em segredo. A chave pública é usada para criptografar as mensagens, enquanto a chave privada é utilizada para descriptografá-las. Isso resolve o problema de troca segura de chaves, permitindo a comunicação segura mesmo em canais não confiáveis. Um exemplo prático de criptografia assimétrica é o protocolo HTTPS, onde o servidor fornece sua chave pública para o navegador, que a utiliza para estabelecer uma conexão segura. A criptografia assimétrica também é usada em assinaturas digitais, onde um documento é assinado com a chave privada de um remetente, e a chave pública do remetente é usada para verificar a autenticidade da assinatura.

Ambos os tipos de criptografia têm suas vantagens e desvantagens. A criptografia simétrica é mais adequada para cenários em que o volume de dados é grande e a chave já foi compartilhada de maneira segura, como no caso de backups de dados ou VPNs. Já a criptografia assimétrica é mais indicada para cenários em que a troca de chaves precisa ocorrer de forma segura sem que as partes se conheçam previamente, como em transações online ou na troca de informações sensíveis em sistemas de e-mail seguro. Em muitas aplicações modernas, como o protocolo SSL/TLS, ambas as criptografias são usadas em conjunto: a criptografia assimétrica para a troca inicial da chave e a criptografia simétrica para a transmissão eficiente dos dados após o estabelecimento da comunicação segura.

explicação dos códigos:

A criptografia simétrica foi usada com AES para garantir que as mensagens sejam enviadas de forma segura.

A chave secreta, já utilizada anteriormente foi fixada para simplificação.

Proteção CSRF:

A proteção CSRF foi implementada gerando um token CSRF único para cada sessão. Esse token é enviado junto com o formulário e validado no lado do cliente.

Testando a criptografia e CSRF:

A criptografia é validada através da verificação de que a mensagem criptografada não pode ser lida sem a chave correta.

A proteção CSRF é validada ao tentar manipular o token CSRF, o que resultaria em um erro de segurança.
