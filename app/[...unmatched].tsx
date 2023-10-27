import React from 'react';
import { Redirect, useRootNavigationState, useRouter } from 'expo-router';

/**
 * It's bad, but needed waiting for a fix of expo-router: https://github.com/expo/router/issues/740
 */
const UnMatched = () => {
  const rootNavigationState = useRootNavigationState();
  const router = useRouter();

  if (!rootNavigationState?.key) return null;

  if (router.canGoBack()) {
    router.back();
  }

  return <Redirect href={'/home'} />;
};

export default UnMatched;
