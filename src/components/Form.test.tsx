import { act, fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import Form from './Form';
import { RecoilRoot } from 'recoil';

describe('Comportamento do Form.tsx', () => {
  test('quando o input está vazio novos participantes não podem ser adicionados', () => {
    render(
      <RecoilRoot>
        <Form />
      </RecoilRoot>
    );

    // encontrar no DOM o input
    const input = screen.getByPlaceholderText('Insira os nomes dos participantes');

    // encontrar o botão
    const button = screen.getByRole('button');

    // garantir que o input esteja no documento
    expect(input).toBeInTheDocument();

    // garantir que o botão esteja desabilitado
    expect(button).toBeDisabled();
  });

  test('como adicionar um participante caso exista um nome preenchido', () => {
    render(
      <RecoilRoot>
        <Form />
      </RecoilRoot>
    );

    // encontrar no DOM o input
    const input = screen.getByPlaceholderText('Insira os nomes dos participantes');

    // encontrar o botão
    const button = screen.getByRole('button');

    //inserir um valor no input
    fireEvent.change(input, {
      target: {
        value: 'Renan Koji',
      },
    });

    //clicar no botão de submeter
    fireEvent.click(button);

    //garantir que o input esteja com o foco ativo
    expect(input).toHaveFocus();

    //garantir que o input esteja vazio
    expect(input).toHaveValue('');
  });

  test('nomes duplicados não podem ser adicionados na lista', () => {
    render(
      <RecoilRoot>
        <Form />
      </RecoilRoot>
    );

    const input = screen.getByPlaceholderText('Insira os nomes dos participantes');
    const button = screen.getByRole('button');

    fireEvent.change(input, {
      target: {
        value: 'Renan Koji',
      },
    });
    fireEvent.click(button);
    fireEvent.change(input, {
      target: {
        value: 'Renan Koji',
      },
    });
    fireEvent.click(button);

    const msgError = screen.getByRole('alert');
    expect(msgError.textContent).toBe('Nomes duplicados não são permitidos!');
  });

  test('A mensagem de erro deve sumir após os timers', () => {
    jest.useFakeTimers();
    render(
      <RecoilRoot>
        <Form />
      </RecoilRoot>
    );

    const input = screen.getByPlaceholderText('Insira os nomes dos participantes');
    const button = screen.getByRole('button');

    fireEvent.change(input, {
      target: {
        value: 'Renan Koji',
      },
    });
    fireEvent.click(button);
    fireEvent.change(input, {
      target: {
        value: 'Renan Koji',
      },
    });
    fireEvent.click(button);

    let msgError = screen.queryByRole('alert');
    expect(msgError).toBeInTheDocument(); //espera em n segundos

    act(() => {
      jest.runAllTimers();
    });

    msgError = screen.queryByRole('alert'); //pode existir ou não
    expect(msgError).toBeNull();
  });
});
