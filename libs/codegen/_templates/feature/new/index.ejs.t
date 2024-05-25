---
inject: true
to: <%= pathname %>/index.ts
skip_if: <%= h.changeCase.param(name) %>
append: true
---
export { <%= name %> } from './<%= h.changeCase.param(name) %>'
