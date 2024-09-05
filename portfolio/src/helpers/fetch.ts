import { request } from '@octokit/request';

async function fetch() {
  const token = import.meta.env.VITE_GITHUB_TOKEN;

  const { data } = await request('POST /graphql', {
    headers: {
      authorization: `token ${token}`,
    },
    query: `
  query {
    viewer {
      login
      avatarUrl
      contributionsCollection {
        contributionCalendar {
          totalContributions
        }
      }
      repositories(first: 100, privacy: PUBLIC) {
        nodes {
          name
        }
      }
    }
  }
`,
  });

  const { viewer } = data.data;
  return {
    username: viewer.login,
    avatarUrl: viewer.avatarUrl,
    totalContributions: viewer.contributionsCollection.contributionCalendar.totalContributions,
    publicRepositories: viewer.repositories.nodes.map((repo: any) => repo.name),
  };
}

export default fetch;