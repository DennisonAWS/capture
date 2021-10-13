import React, { useState, useEffect } from 'react';
import './App.css';
import { API } from 'aws-amplify';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import { listQuestions } from './graphql/queries';
import { createQuestion as createQuestionMutation, deleteQuestion as deleteQuestionMutation } from './graphql/mutations';

const initialFormState = { name: '', description: '' }

function App() {
  const [questions, setQuestions] = useState([]);
  const [formData, setFormData] = useState(initialFormState);

  useEffect(() => {
    fetchQuestions();
  }, []);

  async function fetchQuestions() {
    const apiData = await API.graphql({ query: listQuestions });
    setQuestions(apiData.data.listQuestions.items);
  }

  async function createQuestion() {
    if (!formData.name || !formData.description) return;
    await API.graphql({ query: createQuestionMutation, variables: { input: formData } });
    setQuestions([ ...questions, formData ]);
    setFormData(initialFormState);
  }

  async function deleteQuestion({ id }) {
    const newQuestionsArray = questions.filter(question => question.id !== id);
    setQuestions(newQuestionsArray);
    await API.graphql({ query: deleteQuestionMutation, variables: { input: { id } }});
  }

  return (
    <div className="App">
      <h1>Capture</h1>
      <input
        onChange={e => setFormData({ ...formData, 'name': e.target.value})}
        placeholder="Question name"
        value={formData.name}
      />
      <input
        onChange={e => setFormData({ ...formData, 'description': e.target.value})}
        placeholder="Question description"
        value={formData.description}
      />
      <button onClick={createQuestion}>Create Question</button>
      <div style={{marginBottom: 30}}>
        {
          questions.map(question => (
            <div key={question.id || question.name}>
              <h2>{question.name}</h2>
              <p>{question.description}</p>
              <button onClick={() => deleteQuestion(question)}>Delete question</button>
            </div>
          ))
        }
      </div>
      <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator(App);
