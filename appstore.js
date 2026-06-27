import React, { useRef } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, BackHandler } from 'react-native';
import { WebView } from 'react-native-webview';

export default function App() {
  const webViewRef = useRef(null);

  // 안드로이드 물리적 뒤로가기 버튼 눌렀을 때 앱이 꺼지지 않고 웹페이지 뒤로가기 실행
  const onNavigationStateChange = (navState) => {
    BackHandler.addEventListener('hardwareBackPress', () => {
      if (navState.canGoBack) {
        webViewRef.current.goBack();
        return true;
      }
      return false;
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* iOS/Android 상단 상태바 색상 지정 (웹사이트 헤더와 이질감 없게 설정) */}
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      
      <WebView 
        ref={webViewRef}
        source={{ uri: 'https://study-campus.github.io/study-campus/' }} 
        style={styles.webview}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        onNavigationStateChange={onNavigationStateChange}
        // 웹사이트 확대/축소 시 화면 깨짐 방지
        scalesPageToFit={false} 
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff', // 웹사이트 배경색과 통일하여 렌더링 시 깜빡임 방지
  },
  webview: {
    flex: 1,
  }
});