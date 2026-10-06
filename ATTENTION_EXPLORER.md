# Attention Explorer
## Interactive laboratory: “El gato come pescado”

Build a polished interactive educational web application that explains,
step by step, how self-attention works in a Transformer.

The application is intended for a university-level mathematics/physics
presentation, so mathematical correctness is more important than flashy
animations.

The central example throughout the application must be:

> El gato come pescado

The user must be able to move through every mathematical step,
modify selected numerical values, and immediately see how those changes
propagate through the attention calculation.

---

# 1. Main educational objective

The application should make visually clear the sequence

Text
↓
Tokenization
↓
Token IDs
↓
Embeddings
↓
X
↓
Q, K, V
↓
QKᵀ
↓
Scaling
↓
Softmax
↓
Attention matrix A
↓
Z = AV
↓
Residual connection
↓
LayerNorm
↓
Feed Forward Network

The most important part of the application is the attention calculation:

Q = XW_Q

K = XW_K

V = XW_V

S = QKᵀ / sqrt(d_k)

A = softmax(S)

Z = AV

The user should be able to understand where every number comes from.

---

# 2. Technology

Build this as a modern web application.

Preferred stack:

- React
- TypeScript
- Vite
- Tailwind CSS
- MathJax or KaTeX for equations
- Recharts, Plotly, or D3 only where visualization is useful

Avoid unnecessary backend infrastructure.

Everything can run locally in the browser.

The app must run with:

npm install
npm run dev

Organize the code into reusable components.

---

# 3. Visual design

The visual style should resemble a modern scientific visualization.

Use:

- white or very light background
- dark navy typography
- muted blue
- warm gold accents
- subtle transparent panels
- thin borders
- soft shadows
- generous whitespace

Avoid:

- cartoon robots
- neon colors
- childish icons
- overly saturated colors
- cluttered dashboards

The application should look appropriate for a university keynote
presentation about mathematics and artificial intelligence.

Use a widescreen desktop-first layout suitable for projection.

It must also remain usable on tablets.

---

# 4. Application title

Main title:

ATTENTION EXPLORER

Subtitle:

De “El gato come pescado” al mecanismo de atención

Introductory text:

“Vamos a seguir una oración a través de un Transformer y observar
cómo cuatro tokens se convierten en vectores, queries, keys, values
y finalmente representaciones contextualizadas.”

---

# 5. Navigation

Create a horizontal progress navigator:

1. Texto
2. Tokens
3. Embeddings
4. Q, K, V
5. Similaridad
6. Escalamiento
7. Softmax
8. Attention
9. Z = AV
10. Transformer

The user can:

- click any step
- use Previous / Next
- press a “Play” button to animate the sequence automatically
- press “Reset” to restore the original numerical example

Show the current step clearly.

---

# 6. Step 1 — Original sentence

Display prominently:

EL GATO COME PESCADO

Then animate or visually separate it into:

[El] [gato] [come] [pescado]

Explain:

“Antes de realizar operaciones matemáticas, el texto se divide en
tokens.”

Important:

Explain that this is a pedagogical simplification. Real tokenizers
may divide words into subword or byte-level units.

---

# 7. Step 2 — Token IDs

For educational purposes define arbitrary token IDs:

El       → 17
gato     → 42
come     → 81
pescado  → 103

Show visually:

El → 17
gato → 42
come → 81
pescado → 103

Include the explanation:

“El Token ID no contiene significado semántico. Es simplemente
un índice que permite localizar el embedding correspondiente.”

Make clear that these IDs are illustrative and are not claimed to
belong to any real tokenizer.

---

# 8. Step 3 — Embeddings

Use the pedagogical embeddings:

x_El      = (1,0)

x_gato    = (1,1)

x_come    = (0,1)

x_pescado = (0,2)

Construct:

X =

[ 1  0 ]
[ 1  1 ]
[ 0  1 ]
[ 0  2 ]

Rows:

El
gato
come
pescado

Columns:

dimension 1
dimension 2

Explain clearly:

“These embeddings were deliberately chosen to make the arithmetic
simple enough to calculate by hand. In a real language model,
embeddings are learned parameters.”

Also show the conceptual relation:

token ID
↓
embedding matrix E
↓
embedding vector

For example:

42
↓
E[42,:]
↓
x_gato

---

# 9. Interactive embedding editor

Allow the user to edit every value of X.

Default:

X = [
 [1,0],
 [1,1],
 [0,1],
 [0,2]
]

Whenever X changes, automatically recompute every later quantity:

Q
K
V
QKᵀ
S
A
Z

Include:

RESET VALUES

button.

Also include:

USE ORIGINAL EXAMPLE

---

# 10. Visual embedding space

Because embeddings are 2-dimensional in this example,
create an x-y scatter plot.

Plot:

El       (1,0)
gato     (1,1)
come     (0,1)
pescado  (0,2)

Label every point.

If the user modifies an embedding, move the point dynamically.

This plot is pedagogical only.

---

# 11. Step 4 — Projection matrices

Use exactly:

W_Q =

[ 1  0 ]
[ 1  1 ]

W_K =

[ 1  1 ]
[ 0  1 ]

W_V =

[ 1  0 ]
[ 1  2 ]

Display them side by side.

Explain:

“These matrices represent learned parameters of the Transformer.
Here we choose simple values so the calculation can be performed
manually.”

Allow users to edit every element.

Any edit must automatically propagate through all subsequent
calculations.

---

# 12. Calculate Q

Show:

Q = XW_Q

Perform matrix multiplication visually.

Default result:

Q =

[ 1  0 ]
[ 2  1 ]
[ 1  1 ]
[ 2  2 ]

Rows:

El
gato
come
pescado

When the user clicks a cell, show how that cell was calculated.

Example:

Q(gato,1)

= 1×1 + 1×1

= 2

Use highlighting to show:

row of X
×
column of W_Q
→
result

---

# 13. Calculate K

Show:

K = XW_K

Default result:

K =

[ 1  1 ]
[ 1  2 ]
[ 0  1 ]
[ 0  2 ]

Allow cell-by-cell inspection.

---

# 14. Calculate V

Show:

V = XW_V

Default result:

V =

[ 1  0 ]
[ 2  2 ]
[ 1  2 ]
[ 2  4 ]

Again allow cell-by-cell inspection.

---

# 15. Conceptual interpretation of Q, K and V

Display three elegant panels:

QUERY

“What am I looking for?”

KEY

“What information do I represent?”

VALUE

“What information can I contribute?”

Also show:

X
↙ ↓ ↘
Q  K  V

Avoid suggesting that these phrases are literal definitions.
Explain that they are useful intuitions for understanding the
linear projections.

---

# 16. Step 5 — Similarity

Calculate:

QKᵀ

Default result:

[ 1  1  0  0 ]
[ 3  4  1  2 ]
[ 2  3  1  2 ]
[ 4  6  2  4 ]

Display it as both:

1. numerical matrix
2. heatmap

Rows = queries

Columns = keys

Use labels:

           El   gato   come   pescado
El
gato
come
pescado

---

# 17. Interactive token selection

Allow the user to click:

El
gato
come
pescado

When a token is selected, highlight its entire query row.

Default selected token:

gato

For gato:

q_gato = (2,1)

Show each dot product:

q_gato · k_El
= (2,1)·(1,1)
= 3

q_gato · k_gato
= (2,1)·(1,2)
= 4

q_gato · k_come
= (2,1)·(0,1)
= 1

q_gato · k_pescado
= (2,1)·(0,2)
= 2

Therefore:

[3,4,1,2]

This should be one of the strongest visual moments in the app.

---

# 18. Step 6 — Scaling

Use:

d_k = 2

Therefore:

sqrt(d_k) = sqrt(2)

Calculate:

S = QKᵀ / sqrt(2)

Display enough decimal places to understand the calculation.

Default approximately:

S =

[0.7071  0.7071  0       0      ]
[2.1213  2.8284  0.7071  1.4142 ]
[1.4142  2.1213  0.7071  1.4142 ]
[2.8284  4.2426  1.4142  2.8284 ]

Explain:

“The division by sqrt(d_k) prevents dot products from becoming
too large as the dimensionality of the key vectors increases.”

Include a toggle:

Scaling ON / OFF

When OFF:

S = QKᵀ

Then allow the user to compare the resulting softmax.

---

# 19. Step 7 — Softmax

Apply softmax ROW BY ROW:

A_ij = exp(S_ij) / sum_j exp(S_ij)

IMPORTANT:

Do not hard-code rounded attention values.

Calculate softmax programmatically from S using full floating-point
precision.

Only round values for display.

For the gato row:

S_gato approximately:

[2.1213, 2.8284, 0.7071, 1.4142]

Show:

exp(2.1213)
exp(2.8284)
exp(0.7071)
exp(1.4142)

Then normalize.

Expected approximate result:

A_gato ≈

[0.2656, 0.5387, 0.0646, 0.1311]

Show explicitly:

0.2656 + 0.5387 + 0.0646 + 0.1311 ≈ 1

Explain:

“Softmax converts similarity scores into normalized attention
weights.”

---

# 20. Full attention matrix

Compute:

A = softmax(S)

Do not use hard-coded rounded values internally.

Expected approximate matrix:

A ≈

[0.3350  0.3350  0.1650  0.1650]
[0.2656  0.5387  0.0646  0.1311]
[0.2212  0.4487  0.1091  0.2212]
[0.1543  0.6347  0.0375  0.1735]

Because values are rounded for display, slight differences are expected.

Always compute the actual matrix from the current S.

---

# 21. Attention heatmap

Create a large heatmap.

Rows:

Who is looking?

Columns:

Who is being looked at?

Labels:

          El   gato   come   pescado
El
gato
come
pescado

Use intensity to represent attention weight.

When hovering over a cell display:

Query: gato
Key: pescado
Score before softmax
Attention weight

Example:

Query = gato
Key = pescado

Q·K = 2

scaled score = 2/sqrt(2)

attention weight ≈ 0.131

---

# 22. Attention visualization as connections

Create an optional second visualization.

Place the four tokens horizontally:

El     gato     come     pescado

When a token is selected, draw connections from that token to all
four tokens.

Line thickness represents attention weight.

For gato, the strongest line should correspond to gato itself for
this particular pedagogical numerical example.

IMPORTANT:

Do not imply that these artificial values represent linguistically
realistic attention.

Display a small note:

“Los números fueron elegidos para facilitar el cálculo; no pretenden
representar un patrón lingüístico real.”

---

# 23. Step 8 — Weighted combination

Explain:

The attention weights tell us HOW MUCH information to collect.

The V vectors tell us WHAT information is collected.

For gato:

z_gato =

A_gato,El v_El
+
A_gato,gato v_gato
+
A_gato,come v_come
+
A_gato,pescado v_pescado

Use:

v_El       = (1,0)
v_gato     = (2,2)
v_come     = (1,2)
v_pescado  = (2,4)

Show each weighted vector separately.

Then visually add them.

---

# 24. Calculate Z

Compute:

Z = AV

IMPORTANT:

Compute Z directly from the full-precision A matrix.

Do not calculate Z from rounded displayed values.

Display the resulting matrix with 4 decimal places.

Rows correspond to:

El
gato
come
pescado

Every time X, W_Q, W_K, or W_V changes,
Z must update automatically.

---

# 25. Before vs after attention

Create a comparison:

BEFORE ATTENTION

X

El       → x_El
gato     → x_gato
come     → x_come
pescado  → x_pescado

AFTER ATTENTION

Z

El       → z_El
gato     → z_gato
come     → z_come
pescado  → z_pescado

Explain:

“Z contains representations that have incorporated information from
other tokens through the attention mechanism.”

Do not claim that Z is the final representation produced by a full
Transformer.

---

# 26. Mathematical summary

Create a final clean panel showing:

X

↓

Q = XW_Q
K = XW_K
V = XW_V

↓

QKᵀ

↓

S = QKᵀ / sqrt(d_k)

↓

A = softmax(S)

↓

Z = AV

Use elegant animated arrows.

---

# 27. Continue into a Transformer block

After attention, add an optional section called:

“What happens next?”

Show a simplified Transformer block:

X
↓
Self-Attention
↓
Z
↓
Residual connection
↓
LayerNorm
↓
Feed Forward Network
↓
Residual connection
↓
LayerNorm
↓
Output

Explain that actual Transformer architectures can differ,
especially pre-norm vs post-norm.

---

# 28. Residual connection

For pedagogical purposes show:

R = X + Z

Since X and Z both have shape 4×2 in this simplified example.

Display the matrices side by side:

X + Z = R

Calculate R automatically from the actual current Z.

---

# 29. LayerNorm

Show conceptually:

H = LayerNorm(R)

and:

LN(r) =
gamma ⊙
(r - mean(r)) /
sqrt(var(r) + epsilon)
+ beta

Do not overcomplicate this section.

Provide:

“Show detailed calculation”

as an expandable panel.

---

# 30. Feed Forward Network

Show:

FFN(H) = sigma(HW_1 + b_1)W_2 + b_2

Explain:

“After attention, the Transformer returns to something very familiar:
matrix multiplication, bias and nonlinear activation.”

Connect this explicitly to a neural network.

---

# 31. Playground mode

Add a separate tab:

PLAYGROUND

Allow the user to edit:

X
W_Q
W_K
W_V

Allow selection of:

d_k

where mathematically compatible.

Automatically show:

Q
K
V
QKᵀ
S
A
Z

Display matrices simultaneously in a compact scientific dashboard.

---

# 32. Matrix dependency visualization

Create a dependency diagram:

X ──────┬──────┬──────
        ↓      ↓      ↓
       WQ     WK     WV
        ↓      ↓      ↓
        Q      K      V
         \    /
          QKᵀ
           ↓
       /sqrt(dk)
           ↓
           S
           ↓
        softmax
           ↓
           A
          / \
         /   \
        A     V
         \   /
           Z

When a user modifies a matrix,
highlight all downstream quantities that change.

For example:

Modify W_Q

highlight:

W_Q → Q → QKᵀ → S → A → Z

This is important pedagogically.

---

# 33. Calculation inspector

Whenever the user clicks any matrix cell, open a side panel called:

“¿De dónde salió este número?”

For matrix multiplication show the complete dot product.

Example:

(QKᵀ)_(gato,pescado)

= q_gato · k_pescado

= (2,1) · (0,2)

= 2×0 + 1×2

= 2

For softmax show the exponential and normalization.

For Z show the weighted sum.

This feature is essential.

---

# 34. Precision

Add a selector:

Display precision:

2 decimals
3 decimals
4 decimals
6 decimals

Internal calculations must always use full JavaScript floating-point
precision.

Changing display precision must never affect calculations.

---

# 35. Pedagogical mode

Add a toggle:

Guided mode / Expert mode

GUIDED MODE:

Show explanations and animations.

EXPERT MODE:

Show all matrices simultaneously with minimal explanatory text.

---

# 36. Important mathematical safeguards

Implement automated checks.

Verify:

Q = XW_Q

K = XW_K

V = XW_V

scores = QKᵀ

S = scores / sqrt(d_k)

Each row of A sums to approximately 1.

Z = AV

Use tolerance:

1e-10

If a calculation fails, show a development warning.

---

# 37. Unit tests

Write tests for the default example.

Test that:

X =
[[1,0],
 [1,1],
 [0,1],
 [0,2]]

WQ =
[[1,0],
 [1,1]]

WK =
[[1,1],
 [0,1]]

WV =
[[1,0],
 [1,2]]

produces exactly:

Q =
[[1,0],
 [2,1],
 [1,1],
 [2,2]]

K =
[[1,1],
 [1,2],
 [0,1],
 [0,2]]

V =
[[1,0],
 [2,2],
 [1,2],
 [2,4]]

and:

QKᵀ =
[[1,1,0,0],
 [3,4,1,2],
 [2,3,1,2],
 [4,6,2,4]]

Test softmax numerically.

Test every row sum.

Test Z = AV.

Do not test rounded strings as mathematical values.

---

# 38. Important conceptual disclaimer

Display somewhere unobtrusively:

“Este laboratorio utiliza vectores de dimensión 2 y matrices
artificialmente simples para hacer visible el cálculo. Los modelos
reales utilizan vocabularios, embeddings, múltiples cabezas de
atención y espacios vectoriales de dimensiones mucho mayores.”

---

# 39. Presentation mode

Add:

PRESENTATION MODE

When activated:

- hide editing controls
- enlarge equations
- enlarge matrices
- enlarge labels
- hide unnecessary UI
- enable keyboard arrows to advance
- make the selected token and current calculation highly visible

This mode is intended for projecting the application during a lecture.

---

# 40. Suggested presentation sequence

In Presentation Mode, guide the presenter through:

Screen 1
“El gato come pescado”

Screen 2
Tokens

Screen 3
Embeddings and X

Screen 4
Projection matrices

Screen 5
Q = XW_Q

Screen 6
K = XW_K

Screen 7
V = XW_V

Screen 8
Select “gato”

Screen 9
Dot products

Screen 10
QKᵀ

Screen 11
Scaling by sqrt(2)

Screen 12
Softmax

Screen 13
Attention heatmap

Screen 14
Weighted values

Screen 15
Z = AV

Screen 16
Full Transformer block

This sequence should work almost like an interactive slide deck.

---

# 41. Animations

Animations should communicate mathematics rather than decoration.

Examples:

When calculating Q:

highlight row of X
→
highlight column of W_Q
→
show multiplication
→
show addition
→
place result in Q

When calculating QKᵀ:

highlight q_i
→
highlight k_j
→
dot product
→
place score

When applying softmax:

scores
→
exponentials
→
normalization
→
attention weights

When calculating Z:

attention weights
→
multiply V vectors
→
weighted sum
→
contextualized vector

Allow animations to be paused.

---

# 42. Code organization

Suggested structure:

src/
  components/
    Matrix.tsx
    EditableMatrix.tsx
    MatrixMultiplication.tsx
    Equation.tsx
    TokenRow.tsx
    AttentionHeatmap.tsx
    AttentionConnections.tsx
    CalculationInspector.tsx
    DependencyGraph.tsx
    StepNavigator.tsx
    PresentationMode.tsx

  math/
    matrix.ts
    attention.ts
    softmax.ts
    layernorm.ts

  data/
    example.ts

  pages/
    Explorer.tsx
    Playground.tsx

  tests/
    attention.test.ts

Keep mathematical functions separate from UI components.

---

# 43. Source of truth

Create a single source-of-truth object for the default example:

const example = {
  sentence: "El gato come pescado",

  tokens: ["El", "gato", "come", "pescado"],

  tokenIds: [17, 42, 81, 103],

  X: [
    [1,0],
    [1,1],
    [0,1],
    [0,2]
  ],

  WQ: [
    [1,0],
    [1,1]
  ],

  WK: [
    [1,1],
    [0,1]
  ],

  WV: [
    [1,0],
    [1,2]
  ]
}

Everything else must be computed from these values.

Do NOT manually store Q, K, V, S, A or Z as independent sources
of truth.

---

# 44. Mathematical implementation

Implement pure functions:

matMul(A,B)

transpose(A)

dot(a,b)

softmax(vector)

rowSoftmax(matrix)

computeQKV(X,WQ,WK,WV)

computeScores(Q,K)

computeScaledScores(scores,dk)

computeAttention(scaledScores)

computeOutput(A,V)

and finally:

computeSelfAttention(...)

returning:

{
 Q,
 K,
 V,
 scores,
 scaledScores,
 attention,
 Z
}

---

# 45. Final requirement

Before finishing:

1. Run the application.
2. Run all tests.
3. Verify every default numerical result.
4. Verify every attention row sums to 1.
5. Verify editing X changes all downstream matrices.
6. Verify editing W_Q changes Q but not K or V.
7. Verify editing W_K changes K but not Q or V.
8. Verify editing W_V changes V and Z but not Q, K or A.
9. Verify Reset restores the original example.
10. Verify Presentation Mode works at 1920×1080.

Do not approximate mathematical quantities until display time.

Prioritize mathematical correctness, pedagogical clarity,
and visual elegance over unnecessary features.