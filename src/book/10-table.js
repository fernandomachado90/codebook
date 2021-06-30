import React from "react"

export const title = "HTML"
export const body = (
  <>
    <h1>Tabelas</h1>

    <p>
      Para certos conteúdos, como calendários semanais ou bancos de dados, pode ser interessante apresentar os dados em
      formato de tabela.
    </p>

    <p>
      O elemento <b>&lt;table&gt;</b> define a tabela. Dentro da tabela, para cada linha é criado um elemento{" "}
      <i>table-row</i> (<b>&lt;tr&gt;</b>), seguido de elementos <i>table-data</i> (<b>&lt;td&gt;</b>) para cada item da
      linha. Opcionalmente, usar elementos <i>table-header</i> (<b>&lt;th&gt;</b>) para definir itens títulos.
    </p>

    <code>
      <pre>{`/* necessário para as bordas (mais sobre border à seguir) */
table, th, td {
  border: 1px solid black;
  border-collapse: collapse;
}

<table>
  <tr>
    <th>Horário</th>
    <th>Atividade</th>
    <th>Responsável</th>
  </tr>
  <tr>
    <td>14:30 - 15:00</td>
    <td>Aula sobre tabelas</td>
    <td><i>(à confirmar)</i></td>
  </tr>
  <tr>
    <td>15:30 - 15:45</td>
    <td>Intervalo</td>
    <td>—</td>
  </tr>
  <tr>
    <td>15:45 - 16:45</td>
    <td>Exercícios</td>
    <td>Paulo Freire</td>
  </tr>
</table>`}</pre>
    </code>
    <table>
      <tbody>
        <tr>
          <th>Horário</th>
          <th>Atividade</th>
          <th>Responsável</th>
        </tr>
        <tr>
          <td>14:30 - 15:00</td>
          <td>Aula sobre tabelas</td>
          <td>
            <i>(à confirmar)</i>
          </td>
        </tr>
        <tr>
          <td>15:30 - 15:45</td>
          <td>Intervalo</td>
          <td>—</td>
        </tr>
        <tr>
          <td>15:45 - 16:45</td>
          <td>Exercícios</td>
          <td>Paulo Freire</td>
        </tr>
      </tbody>
    </table>
  </>
)
