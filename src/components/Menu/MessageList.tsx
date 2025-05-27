interface props {
  items: string[];
  name: string;
}

function MessageList(props: props) {
  return (
    <div>
      {props["items"].map((msg, index) => (
        <div key={`${msg}-${index}`}>
          <p>{props['name']}: {msg}</p>
          <br></br>
        </div>
      ))}
    </div>
  );
}

export default MessageList;