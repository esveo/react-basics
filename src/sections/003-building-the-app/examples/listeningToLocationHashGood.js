import React, { useEffect, useState } from 'react';

function CurrentHash() {
  const [hash, setHash] = useState(null);

  useEffect(() => {
    function onHashChange() {
      setHash(location.hash);
    }
    window.addEventListener('hashchange', onHashChange);

    return function cleanup() {
      window.removeEventListener('hashchange', onHashChange);
    };
  });

  return <h1>Current hash: {hash}</h1>;
}
