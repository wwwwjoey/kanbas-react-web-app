const REMOTE_SERVER = "http://localhost:4000"
export default function EnvironmentVariables() {
  return (
    <div id="wd-environment-variables">
      <h3>Environment Variables</h3>
      <p>Remote Server: {REMOTE_SERVER}</p><hr/>
    </div>
  );
}
