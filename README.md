# Attention Explorer
Laboratorio interactivo en español basado en ATTENTION_EXPLORER.md.

```sh
npm install
npm run dev
```

`npm test` verifica las proyecciones, softmax estable, normalización y dependencias.
`npm run build` verifica TypeScript y genera `dist/`.

Diez pasos guiados, Playground con matrices editables, inspector de cálculo, selección de token, heatmap, conexiones, precisión visual y presentación de 16 pantallas. Flechas izquierda/derecha para navegar; Escape sale de presentación. Play avanza cada 4.5 segundos.

Los valores derivados se calculan a precisión completa; el escalamiento usa dₖ = 2, la dimensión real de Q y K. La FFN se explica conceptualmente. Las aproximaciones de la matriz de atención en el documento original contienen discrepancias: la app muestra los resultados calculados directamente desde el ejemplo, sin copiar esos redondeos.
