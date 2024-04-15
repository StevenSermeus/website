import React, { useEffect } from "react";
import { Star, GitFork } from "lucide-react";
interface Repo {
  name: string;
  description: string;
  html_url: string;
  language: string;
  forks: number;
  stargazers_count: number;
}

function GithubRepo() {
  const [repos, setRepos] = React.useState<Repo[]>([]);
  useEffect(() => {
    fetch("https://api.github.com/users/StevenSermeus/repos?sort=pushed")
      .then(response => response.json())
      .then(
        result => {
          setRepos(result.slice(0, 3));
        },
        error => {
          console.error(error);
        }
      );
  }, []);

  return (
    <>
      <ul>
        {repos.map(repo => (
          <li key={repo.name}>
            <a href={repo.html_url}>{repo.name}</a> - {repo.description} (
            {repo.language}) <Star size={16} /> {repo.stargazers_count}{" "}
            <GitFork size={16} />
            {repo.forks}
          </li>
        ))}
      </ul>
    </>
  );
}

export default GithubRepo;
