# Operação 10X — Site e páginas de vendas

Site estático da **Operação 10X**, redesenhado como um sistema operacional tático para produtos digitais com IA. A implementação prioriza conversão, consistência visual, acessibilidade e carregamento rápido, sem frameworks ou dependências de execução.

## Sistema visual

A identidade é baseada em três conceitos: **Tática, Tecnológica e Implacável**. O sistema utiliza fundo quase preto, verde-limão para ação, ciano para informação, tipografia condensada nos títulos e tipografia monoespaçada no corpo. Códigos como `OP-24H`, `OP-FNL` e `OP-VLT` diferenciam as ofertas sem fragmentar a família visual.

A especificação completa está em [`DESIGN-SYSTEM.md`](./DESIGN-SYSTEM.md).

## Rotas principais

| Rota | Oferta | Estado comercial |
|---|---|---|
| `/` | Arsenal Operação 10X | Navegação principal |
| `/produto-digital-24h/` | Produto em 24H | Checkout ativo |
| `/35-templates/` | 35 Templates de Copy | Checkout ativo |
| `/kit-7-dias/` | Kit Lançamento em 7 Dias | Checkout ativo |
| `/trafego-organico-30-dias/` | Tráfego Orgânico em 30 Dias | Checkout ativo |
| `/vault10x/` | Vault 10X | Checkout ativo |
| `/renda-com-ia-30-dias/` | Renda com IA em 30 Dias | Checkout em configuração |
| `/funil-de-vendas/` | Funil de Vendas do Zero com IA | Checkout em configuração |
| `/30-dias-conteudo/` | Sistema de Conteúdo em 30 Dias | Checkout em configuração |
| `/kit-identidade-visual/` | Kit Identidade Visual com IA | Checkout em configuração |
| `/pack-freela/` | Pack IA para Freelancers | Checkout em configuração |

Ofertas sem URL confirmada exibem um estado desativado explícito. Não existem links falsos, escassez inventada ou redirecionamentos para um checkout incorreto.

## Arquitetura técnica

O projeto usa HTML semântico, CSS compartilhado e JavaScript progressivo mínimo. As fontes estão hospedadas localmente em WOFF2 e as imagens de marca foram convertidas para WebP/JPEG otimizados. O FAQ funciona com `details/summary` mesmo sem JavaScript.

```text
assets/
├── fonts/                # Fontes WOFF2 locais
├── logo-10x.webp         # Logo horizontal otimizado
├── logo-mark.webp        # Marca compacta
├── og-operacao-10x.jpg   # Imagem para compartilhamento
├── site.css              # Design system e responsividade
└── site.js               # Melhorias progressivas
```

## Execução local

Como o site é estático, qualquer servidor HTTP simples funciona. Um exemplo com Node.js:

```bash
npx serve .
```

Depois, abra o endereço exibido no terminal. Evite testar apenas com `file://` quando for medir SEO, cache ou carregamento de fontes.

## Publicação

A branch `main` é compatível com GitHub Pages. Em **Settings → Pages**, selecione **Deploy from a branch**, use a branch `main` e a pasta `/ (root)`. O domínio canônico configurado no HTML e no sitemap é:

```text
https://digierammd.github.io/operacao-10x-os/
```

## Garantias de qualidade

A validação final cobriu 15 páginas, rotas internas, único H1, viewport, IDs, imagens, CTAs ativos e estados desativados. A home e a página Produto em 24H atingiram **100/100 em Performance, Acessibilidade, Boas Práticas e SEO** no Lighthouse executado localmente após a otimização final.

Antes de publicar novas ofertas, confirme a URL oficial do checkout, mantenha o código de operação, use apenas uma ação primária por bloco e valide a página em mobile.

## Manutenção

Para alterar cores, tipografia ou espaçamento, edite os tokens no início de `assets/site.css`. Para ativar uma oferta pendente, substitua o estado desativado por um link real e seguro da plataforma de checkout; nunca reutilize o checkout de outro produto.
