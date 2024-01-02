provider "kubernetes" {
  config_path = "~/.kube/config"  # Adjust the path to your kubeconfig file
}

resource "kubernetes_namespace" "app_namespace" {
  metadata {
    name = "your-kubernetes-namespace"
  }
}
