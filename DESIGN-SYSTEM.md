# Sistema visual e arquitetura de conversão — Operação 10X

**Autor:** Manus AI  
**Versão:** 1.1  
**Aplicação:** landing pages de produtos digitais da Operação 10X

## 1. Tradução visual do posicionamento

A Operação 10X não deve parecer uma escola genérica de marketing nem uma página de “guru”. Seu território é o de um **sistema operacional tático para execução digital com IA**. O visual deve comunicar método, velocidade e capacidade de transformar conhecimento em ativos vendáveis.

> **Três palavras-conceito:** TÁTICA · TECNOLÓGICA · IMPLACÁVEL

| Conceito | Tradução visual | Função comercial |
|---|---|---|
| **Tática** | Grids, índices, numeração de etapas, etiquetas e módulos claramente delimitados | Transforma a promessa em um plano executável |
| **Tecnológica** | Base escura, ciano para dados, verde-limão como sinal de ação, tipografia mono em metadados | Diferencia a marca do infoproduto genérico |
| **Implacável** | Contraste alto, headlines condensadas, bordas precisas, zero ornamento sem função | Comunica velocidade e foco em resultado |

## 2. Paleta oficial

A nova paleta elimina o dourado dominante das versões anexadas, pois ele aproxima a marca do território visual saturado de “premium digital”. O verde-limão e o ciano, já presentes no briefing oficial e no logo, passam a cumprir funções distintas: **ação** e **informação**.

| Token | Hex / valor | Papel |
|---|---:|---|
| `--ink-950` | `#050806` | Fundo principal; reduz brilho sem perder o preto proprietário |
| `--ink-900` | `#0A0A0A` | Fundo institucional e header |
| `--ink-850` | `#0D1511` | Superfícies elevadas |
| `--ink-800` | `#111D17` | Cards e blocos internos |
| `--signal` | `#C8FF00` | CTA primário, números-chave, foco e estados ativos |
| `--signal-dark` | `#91BC00` | Texto escuro/contorno relacionado ao CTA |
| `--data` | `#00D4FF` | Métricas, links secundários, tags técnicas e detalhes de método |
| `--paper` | `#F4F7EF` | Texto principal em fundo escuro |
| `--steel` | `#B8C5BE` | Texto secundário e parágrafos |
| `--muted` | `#9CA59D` | Metadados de baixa prioridade |
| `--danger` | `#FF5668` | Dor, erro e itens negativos; uso restrito |
| `--line` | `rgba(200,255,0,.16)` | Bordas ligadas à ação |
| `--line-data` | `rgba(0,212,255,.16)` | Bordas ligadas à informação |

O contraste mínimo deve ser preservado em todos os estados. O CTA verde usa texto quase preto; texto verde pequeno não deve ser aplicado sobre branco ou cinza claro.

## 3. Tipografia

| Camada | Fonte | Uso | Regras |
|---|---|---|---|
| **Display** | Big Shoulders Display | H1, H2, números de módulos e preço | 700–900; caixa alta seletiva; entrelinha de `0.9–1.0`; tracking entre `-0.02em` e `0.01em` |
| **Sistema** | IBM Plex Mono | Corpo, labels, botões, FAQ e metadados | 400–700; corpo entre `15–17px`; entrelinha de `1.65–1.75` |
| **Fallback** | `Arial Narrow`, `Consolas`, `monospace` | Continuidade em falha de carregamento | Métricas e espaçamentos não devem depender do carregamento da fonte |

A headline deve ser curta e visualmente agressiva. O corpo permanece mono para reforçar o território de “sistema operacional”, mas nunca abaixo de `15px` no mobile.

## 4. Tom visual

O tom é **HUD tático editorial**: uma interface de comando, não um dashboard decorativo. Linhas de grade, etiquetas de status e numeração só existem para orientar leitura, indicar sequência ou destacar informação mensurável.

| Elemento | Aplicação correta | Motivo |
|---|---|---|
| Grade de fundo | Linhas sutis de 64 px, opacidade máxima de 4% | Cria território tecnológico sem competir com o texto |
| Bordas | 1 px, cantos de 0–4 px | Comunica precisão; evita o padrão SaaS arredondado genérico |
| Ícones | SVG lineares próprios, 20–24 px | Reduz peso e mantém unidade formal |
| Sombras | Quase inexistentes; brilho controlado apenas em foco/CTA | O contraste vem da hierarquia, não de efeitos |
| Movimento | Transições de 160–220 ms; sem animação de entrada obrigatória | Preserva velocidade e reduz distração |
| Imagens | Produto/mockup somente quando agrega prova concreta | Evita estoque genérico e dependência visual desnecessária |

## 5. Hierarquia visual da landing page

A primeira dobra deve responder, nesta ordem: **o que é**, **qual transformação entrega**, **em quanto tempo/qual formato**, **quanto custa** e **qual é a próxima ação**.

| Ordem de atenção | Elemento | Tratamento |
|---:|---|---|
| 1 | Resultado principal | H1 em Big Shoulders Display, `clamp(3.6rem, 9vw, 7.8rem)` |
| 2 | Mecanismo/tempo | Palavra ou trecho em verde-limão dentro do H1 |
| 3 | Subheadline | Máximo de 2–3 linhas, largura entre 50 e 62 caracteres |
| 4 | CTA + preço | Botão verde de alto contraste; “R$47, pagamento único” imediatamente próximo |
| 5 | Métricas de produto | Três ou quatro células compactas em ciano/branco |
| 6 | Próxima seção | Dor específica nomeada sem exagero ou promessa falsa |

## 6. Arquitetura de conversão

Todas as páginas de venda seguem a mesma gramática, mas o conteúdo e o “sinal” de cada produto mudam. Isso cria reconhecimento de marca sem produzir páginas clonadas.

| Sequência | Seção | Objetivo |
|---:|---|---|
| 1 | Header mínimo | Reforçar marca e oferecer acesso ao arsenal sem desviar o usuário |
| 2 | Status rail | Fixar tempo, formato, preço e garantia em leitura instantânea |
| 3 | Hero | Promessa específica, mecanismo, CTA e ficha técnica |
| 4 | Dor real | Nomear bloqueios concretos e aumentar relevância |
| 5 | Método | Mostrar a sequência executável e reduzir percepção de esforço |
| 6 | Conteúdo/entregáveis | Materializar valor; cada item deve existir no produto real |
| 7 | Para quem é / não é | Qualificar e reduzir reembolso |
| 8 | Garantia | Reverter risco com linguagem direta e legalmente sóbria |
| 9 | Oferta | Empilhar entrega, preço, acesso e CTA; checkout ativo ou estado “em configuração” |
| 10 | FAQ | Resolver dúvidas de formato, acesso, ferramentas, experiência e garantia |
| 11 | CTA final | Repetir a decisão com uma frase curta e sem nova informação |

## 7. Componentes e especificações

| Componente | Desktop | Mobile | Regras obrigatórias |
|---|---|---|---|
| Container | Máximo `1180px`; padding lateral `32px` | Padding lateral `18px` | Nunca encostar texto nas bordas |
| Grid hero | `7/5` colunas; gap `64px` | Uma coluna | Card técnico vem após CTA, não antes |
| Seções | Padding vertical `96–120px` | `64–80px` | Separação por borda e índice |
| Cards | 2–4 colunas conforme conteúdo | Uma coluna | Alturas naturais; sem textos comprimidos |
| CTA primário | Altura mínima `56px`; padding `20px 26px` | Largura 100%; mínimo `58px` | Estado de foco visível e texto orientado à ação |
| FAQ | Acordeão nativo com `details/summary` | Igual | Funciona sem JavaScript |
| Sticky CTA | Opcional após hero | Barra inferior apenas após rolagem | Deve ser discreta, fechável e não cobrir conteúdo |
| Oferta | Duas colunas, preço à direita | Uma coluna | Preço, garantia e acesso no mesmo bloco visual |

## 8. Variação proprietária por produto

A estrutura permanece consistente, mas cada página recebe um **código de operação** e um padrão de dados próprio. Exemplos: `OP-24H`, `OP-30R`, `OP-FNL`, `OP-COPY`, `OP-TRF`, `OP-CNT`, `OP-ID`, `OP-FRL` e `OP-L7D`. O código aparece no hero, no rail e nos índices de seção. Assim, a família é reconhecível sem depender do nome da marca.

## 9. Especificação para peças correlatas

| Peça | Dimensão / grid | Hierarquia | Elementos obrigatórios |
|---|---|---|---|
| Landing page | `1180px`, 12 colunas; mobile 4 colunas | Resultado → mecanismo → CTA → métricas | Logo, código da operação, preço, garantia, entregáveis, FAQ |
| Carrossel Instagram | `1080×1350`, grid 12 colunas, margem 80 px | Gancho → tensão → método → ação | Código da operação, número do slide, assinatura 10X, CTA final |
| Thumbnail | `1280×720`, zona segura central de 1040×580 | Número/resultado → palavra-chave → código | Máximo 6 palavras; contraste verde/preto; sem miniaturas genéricas |
| E-mail | Largura `600px`, uma coluna, padding 32 px | Assunto → primeira frase → bloco útil → CTA | Cabeçalho textual leve, CTA único, rodapé legal e link de descadastro |

## 10. Linha vermelha visual

Nunca usar dourado como cor estrutural; gradiente roxo/rosa de “IA”; fotos de banco com pessoas apontando para telas; mockups sem relação com o produto; excesso de glow; cards excessivamente arredondados; ícones de bibliotecas com estilos misturados; contadores falsos; escassez inventada; depoimentos sem comprovação; animações que atrasem a leitura; corpo menor que 15 px; dois CTAs concorrentes na mesma hierarquia; ou qualquer elemento que possa ser removido sem perda de informação.

> Se for possível trocar apenas o logo e atribuir a página a outro infoprodutor, a página deve ser considerada reprovada.

## 11. Checklist pré-implementação

| Critério | Meta |
|---|---|
| Identidade reconhecível sem logo | Verde-limão + ciano + grade tática + display condensada + códigos de operação |
| Peso de cada HTML | Preferencialmente abaixo de 35 KB, sem imagens embutidas em base64 |
| JavaScript | Zero para conteúdo essencial; apenas melhoria progressiva se necessário |
| Acessibilidade | HTML semântico, skip link, foco visível, `aria-label` quando necessário, respeito a `prefers-reduced-motion` |
| Responsividade | Testada em 360, 390, 768, 1024 e 1440 px |
| Integridade comercial | Somente checkouts reais; produtos sem checkout recebem estado explicitamente indisponível |
| SEO básico | Title, description, canonical, Open Graph e um único H1 por página |

## Referências

[1]: https://github.com/digierammd/operacao-10x-os/ "Repositório Operação 10X"
[2]: https://digierammd.github.io/operacao-10x-os/ "Site publicado Operação 10X"

## 12. Validação implementada

A versão 1.1 está aplicada à home e às dez páginas de oferta do repositório. As fontes são hospedadas localmente; os CTAs comerciais utilizam somente URLs confirmadas; e as ofertas pendentes exibem estado desativado explícito.
