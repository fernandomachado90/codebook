import React from "react"

export const title = "HTML"
export const body = (
  <>
    <h1>Formulários</h1>

    <p>
      Dentro de uma seção demarcada por <b>&lt;form&gt;</b>, podemos incluir elementos como campos de texto, caixas de
      seleção e botões que permitem interação com a página.
    </p>

    <p>
      <b>&lt;input type="_____"&gt;</b>{" "}
      <i>
        (campo de entrada, atributos variam de acordo com o <b>type=""</b>)
      </i>
      <br />
      <b>&lt;label for="_____"&gt;</b>{" "}
      <i>
        (rótulo que se conecta ao campo input com <b>id</b> indicado em <b>for=""</b>)
      </i>
    </p>

    <h3>Textos</h3>

    <p>
      Os tipos mais simples de <b>&lt;input&gt;</b> são <b>text</b> (texto puro), <b>email</b> (validação de emails),{" "}
      <b>password</b> (oculta senhas por segurança) e <b>search</b> (indicado para filtros).{" "}
    </p>

    <p>
      Para uso com rótulos, é preciso incluir um <b>id=""</b> correspondente ao <b>&lt;label for=""&gt;</b>. Já o
      atributo <b>name=""</b> define o nome do campo a ser enviado pelo formulário.
    </p>

    <p>
      O atributo <b>required</b> pode ser usado para tornar um campo obrigatório.
    </p>

    <code>
      <pre>{`<form>
  <label for="nome">Nome:</label>
  <input type="text" name="nome" id="nome" required />

  <label for="email">Email:</label>
  <input type="email" name="email" id="email" required />

  <label for="senha">Senha:</label>
  <input type="password" name="senha" id="senha" required />

  <label for="busca">Busca:</label>
  <input type="search" name="busca" id="busca" />
</form>`}</pre>
    </code>
    <form style={{ background: "turquoise" }}>
      <p>
        <label htmlFor="nome">Nome:</label> <input type="text" name="nome" id="nome" required />
      </p>
      <p>
        <label htmlFor="email">Email:</label> <input type="email" name="email" id="email" required />
      </p>
      <p>
        <label htmlFor="senha">Senha:</label> <input type="password" name="senha" id="senha" required />
      </p>
      <p>
        <label htmlFor="busca">Busca:</label> <input type="search" name="busca" id="busca" />
      </p>
    </form>

    <h3>Números</h3>

    <p>
      Os tipos <b>number</b> (campo aberto) e <b>range</b> (barra de seleção) aceitam números. O atributo <b>min=""</b>{" "}
      define o valor mínimo válido, o <b>max=""</b> o valor máximo válido e o <b>step=""</b> define o passo no qual o
      seletor incrementa (e decrementa) valores.
    </p>

    <code>
      <pre>{`<label for="qtde">Quantidade:</label>
<input type="number" id="qtde" min="0" max="100" step="5"/>

<label for="instensidade">Intensidade:</label>
<input type="range" id="instensidade" min="0" max="1000" />`}</pre>
    </code>
    <form style={{ background: "turquoise" }}>
      <p>
        <label htmlFor="quantidade">Quantidade:</label>{" "}
        <input type="number" name="quantidade" id="quantidade" min="0" max="100" step="5" />
      </p>
      <p>
        <label htmlFor="instensidade">Intensidade:</label>{" "}
        <input type="range" name="instensidade" id="instensidade" min="0" max="1000" />
      </p>
    </form>

    <h3>Seletores</h3>

    <p>
      Os seletores <b>radio</b> (única escolha) e <b>checkbox</b> (múltipla escolha) permitem fazer uma seleção entre os
      diferentes <b>value=""</b> disponíveis.
    </p>
    <p>
      Enquanto cada opção precisa ter um <b>id=""</b> único correspondente ao <b>&lt;label for=""&gt;</b>, o atributo{" "}
      <b>name=""</b> deve ser comum para identificar o mesmo "grupo de escolhas".
    </p>

    <code>
      <pre>{`Gênero:<br/>
<input type="radio" name="genero" id="genero-f" value="f"/>
<label for="genero-f">feminino</label>
<br/>
<input type="radio" name="genero" id="genero-m" value="m"/>
<label for="genero-m">masculino</label>
<br/>
<input type="radio" name="genero" id="genero-nb" value="nb"/>
<label for="genero-nb">não-binário</label>

Transporte:<br/>
<input type="checkbox" name="veiculo" id="vb" value="b" />
<label for="vb">bicicleta</label>
<br/>
<input type="checkbox" name="veiculo" id="vc" value="c" />
<label for="vc">carro</label>
<br/>
<input type="checkbox" name="veiculo" id="vo" value="o" />
<label for="vo">ônibus</label>
<br/>
<input type="checkbox" name="veiculo" id="vt" value="t" />
<label for="vt">táxi</label>`}</pre>
    </code>
    <form style={{ background: "turquoise" }}>
      <p>
        Gênero:
        <br />
        <input type="radio" name="genero" id="genero-f" value="f" /> <label htmlFor="genero-f">feminino</label>
        <br />
        <input type="radio" name="genero" id="genero-m" value="m" /> <label htmlFor="genero-m">masculino</label>
        <br />
        <input type="radio" name="genero" id="genero-nb" value="nb" /> <label htmlFor="genero-nb">não-binário</label>
      </p>
      <p>
        Transporte:
        <br />
        <input type="checkbox" name="veiculo" id="veiculo-b" value="b" /> <label htmlFor="veiculo-b">bicicleta</label>
        <br />
        <input type="checkbox" name="veiculo" id="veiculo-c" value="c" /> <label htmlFor="veiculo-c">carro</label>
        <br />
        <input type="checkbox" name="veiculo" id="veiculo-o" value="o" /> <label htmlFor="veiculo-o">ônibus</label>
        <br />
        <input type="checkbox" name="veiculo" id="veiculo-t" value="t" /> <label htmlFor="veiculo-t">táxi</label>
      </p>
    </form>

    <p>
      O elemento <b>&lt;select&gt;</b> também permite uma única escolha entre <b>&lt;option value=""&gt;</b>
    </p>

    <code>
      <pre>{`<label for="alimentacao">Alimentação:</label>
<select name="alimentacao" id="alimentacao">
  <option value="0">sem restrições</option>
  <option value="1">ovolactovegetariana</option>
  <option value="2">lactovegetariana</option>
  <option value="3">ovovegetariana</option>
  <option value="4">vegetariana estrita</option>
  <option value="5">vegana</option>
</select>`}</pre>
    </code>

    <form style={{ background: "turquoise" }}>
      <p>
        <label htmlFor="alimentacao">Alimentação:</label>{" "}
        <select name="alimentacao" id="alimentacao">
          <option value="0">sem restrições</option>
          <option value="1">ovolactovegetariana</option>
          <option value="2">lactovegetariana</option>
          <option value="3">ovovegetariana</option>
          <option value="4">vegetariana estrita</option>
          <option value="5">vegana</option>
        </select>
      </p>
    </form>

    <h3>Especiais</h3>

    <p>
      Há outros tipos de <b>&lt;input&gt;</b>, recomendados para situações específicas e sem garantia de compatibilidade
      com todo navegador. Podemos listar: <b>color</b> (seleção de cores), <b>time</b> (horário), <b>date</b> (data),{" "}
      <b>datetime-local</b> (data e hora) e <b>file</b> (upload de arquivos).
    </p>

    <code>
      <pre>{`<label for="cor">Cor:</label>
<input type="color" name="cor" id="cor" />

<label for="horario">Horário:</label>
<input type="time" name="horario" id="horario" />

<label for="nascimento">Nascimento:</label>
<input type="date" name="nascimento" id="nascimento" min="1900-01-01" max="2999-12-31" />

<label for="agenda">Agendamento:</label>
<input type="datetime-local" name="agenda" id="agenda" />

<label for="anexo">Anexo:</label>
<input type="file" name="anexo" id="anexo" />`}</pre>
    </code>
    <form style={{ background: "turquoise" }}>
      <p>
        <label htmlFor="cor">Cor:</label> <input type="color" name="cor" id="cor" />
      </p>
      <p>
        <label htmlFor="horario">Horário:</label> <input type="time" name="horario" id="horario" />
      </p>
      <p>
        <label htmlFor="nascimento">Nascimento:</label>{" "}
        <input type="date" name="nascimento" id="nascimento" min="1900-01-01" max="2999-12-31" />
      </p>
      <p>
        <label htmlFor="agendamento">Agendamento:</label>{" "}
        <input type="datetime-local" name="agendamento" id="agendamento" />
      </p>
      <p>
        <label htmlFor="anexo">Anexo:</label> <input type="file" name="anexo" id="anexo" />
      </p>
    </form>
  </>
)
