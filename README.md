# Atividade semana_07


Este documento descreve as melhorias feitas no código para buscar uma melhor performance na aplicação.


## Componente ColorResponsive


Inicialmente, lógica de atualização do background era acionada toda vez que a janela era redimensionada, independentemente de a cor realmente ter mudado ou não. Além disso, o evento de redimensionamento era acionado toda vez que o componente era montado (no useEffect), o que pode gerar muitos redimensionamentos.
Foi então adicionado uma verificação da mudança de cor antes de atualizar o estado para evitar atualizações desnecessárias do estado e re-renderizações do componente quando a cor não muda. Além disso, foi adicionada uma dependência no array de dependências do useEffect para o estado color, garantindo que o evento de redimensionamento só seja adicionado e removido quando o estado da cor mudar.


## Componente ContadorComErros


No código anterior, a cada atualização do contador, os erros eram recalculados a partir das condições de validação e eram adicionados ao array de erros. No entanto, isso poderia resultar em uma performance ineficiente, pois os erros anteriores eram renderizados novamente junto com os novos erros (isso é possivel de visualizar com o profiler da extensão react developer tools)

No código atual foi implementado o hook useMemo, onde a lista de erros é mapeada para a variável renderedErros para que a lista de erros seja recalculada quando a lista original de erros mudar, evitando recriações desnecessárias, e não toda vez que o componente for renderizado, melhorando a performance do código.

Além disso, foi usado o pacote uuidv4() para gerar chaves únicas para os erros, garantindo uma renderização eficiente. 


## Componente ListKeys


Inicialmente tinha utilizado o useMemo e uma lógica muito parecida à que foi usada no componente ContadorComErros, porém verificando o código pude perceber que apenas deixando a key do componente usando o pacote uuidv4() foi suficiente para evitar a renderização desnecessária dos inputs. O pacote uuidv4() gera uma key, um identificador único que ajuda o react a otimizar a renderização, pois identifica facilmente quais componentes (inptus) foram adicionados.


